type RequestMoneyNotification = {
  customer_name: string;
  payment_link: string;
  business_name: string;
};
export default function (data: RequestMoneyNotification): string {
  const { customer_name, payment_link, business_name } = data;
  return `Hello, ${customer_name} \nThis is the link ${payment_link} for the purchase from ${business_name}`;
}
