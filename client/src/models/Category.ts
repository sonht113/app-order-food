import React from 'react';

interface iconProps {
  className: string
}

export interface Category {
  id?: string;
  name: string;
  icon: React.FC<iconProps>;
  description: string;
}