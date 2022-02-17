type CreditReminderNotification = {
  total_owed: number;
  business_name: string;
  creditor_name: string;
  payment_date: string;
};

export default function (data: CreditReminderNotification): string {
  const { total_owed, business_name, creditor_name, payment_date } = data;
  return `Dear ${business_name}, you have a credit of ${total_owed} with ${creditor_name} due by tomorrow ${payment_date}. Do not forget to clear off this debt or reach out to them to get an extension`;
}
