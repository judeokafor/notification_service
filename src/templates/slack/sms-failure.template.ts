type SlackFailureNotification = {
  provider: string;
  service: string;
  type: string;
  error_count: number;
  error: string | Record<any, unknown>;
  priority: string;
  meta: any;
  recommendations: string;
};

export default function (data: SlackFailureNotification): string {
  const {
    provider,
    service,
    type,
    error_count,
    error,
    priority,
    meta,
    recommendations,
  } = data;
  return `**** ${provider.toUpperCase()} ${service.toUpperCase()} ${type.toUpperCase()} NOTIFICATION  ***** \
  error count: ${error_count}\
  error: ${
    typeof error === 'object' ? JSON.stringify(error) : error.toString()
  }\
  priority level: ${priority || 'medium'}\
  meta: ${meta ? JSON.stringify(meta) : ''}
  recommendations: ${recommendations || 'Switch providers'}`;
}
