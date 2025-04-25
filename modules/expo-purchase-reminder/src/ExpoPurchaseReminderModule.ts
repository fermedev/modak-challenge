import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoPurchaseReminderModule extends NativeModule {
  addReminder(
    title: string,
    location: string,
    notes: string,
    timestamp: number,
  ): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoPurchaseReminderModule>(
  'ExpoPurchaseReminder',
);
