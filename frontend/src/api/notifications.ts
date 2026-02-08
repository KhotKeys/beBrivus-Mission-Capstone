import { api } from "./index";

export interface NotificationItem {
  id: number;
  title: string;
  body: string;
  notification_type: string;
  data?: Record<string, unknown> | null;
  read_at: string | null;
  created_at: string;
}

export const notificationsApi = {
  list: (status?: "unread") =>
    api.get<NotificationItem[]>(
      `/messaging/notifications/${status ? `?status=${status}` : ""}`
    ),
  markRead: (id: number) =>
    api.post(`/messaging/notifications/${id}/mark_read/`),
  markAllRead: () => api.post(`/messaging/notifications/mark_all_read/`),
};
