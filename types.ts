import React from 'react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FinancialData {
  name: string;
  value: number;
  color: string;
}