type InvoiceReminderNotification = {
  balance: number;
  business_name: string;
  customer_name: string;
};

export default function (data: InvoiceReminderNotification): string {
  const { balance, business_name, customer_name } = data;
  return `Dear ${business_name}, Payment of ${balance} with ${customer_name} due by tomorrow. Do not forget to collect the payment`;
}
