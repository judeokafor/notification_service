type DebtReminderNotification = {
  total_owed: number;
  business_name: string;
  debtor_name: string;
};

export default function (data: DebtReminderNotification): string {
  const { total_owed, business_name, debtor_name } = data;
  return `Dear ${business_name}, This is to remind you that your outstanding debt of NGN ${total_owed} with ${debtor_name} is due tomorrow. Do not forget to collect this debt`;
}
