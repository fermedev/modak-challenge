import ExpoModulesCore
import EventKit

public class ExpoPurchaseReminderModule: Module {
  let eventStore = EKEventStore()

  public func definition() -> ModuleDefinition {
    Name("ExpoPurchaseReminder")

    AsyncFunction("addReminder") { 
      (title: String, location: String?, notes: String?, timestamp: Double) async throws -> String in
        
      try await withCheckedThrowingContinuation { continuation in
        eventStore.requestAccess(to: .event) { granted, error in
          if let error = error {
            continuation.resume(throwing: error)
            return
          }

          guard granted else {
            continuation.resume(throwing: NSError(domain: "CalendarAccess", code: 1, userInfo: [NSLocalizedDescriptionKey: "Calendar access not granted"]))
            return
          }

          let event = EKEvent(eventStore: self.eventStore)
          event.title = title
          event.location = location
          event.notes = notes
          event.startDate = Date(timeIntervalSince1970: timestamp)
          event.endDate = event.startDate.addingTimeInterval(60 * 60)
          event.calendar = self.eventStore.defaultCalendarForNewEvents

          do {
            try self.eventStore.save(event, span: .thisEvent, commit: true)
            continuation.resume(returning: "Reminder added successfully")
          } catch {
            continuation.resume(throwing: error)
          }
        }
      }
    }
  }
}
