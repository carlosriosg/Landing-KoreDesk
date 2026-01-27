
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}
