export interface LinkItem {
  title: string;
  url: string;
  description?: string;
  isHot?: boolean;
  isNew?: boolean;
  icon?: string; // Icon name or character
  color?: string; // Optional color for the icon background
}

export interface SubCategory {
  title: string;
  links: LinkItem[];
}

export interface Category {
  id: string;
  title: string;
  iconName: string; // Lucide icon name mapping
  links: LinkItem[]; // Direct links for this category (flattened structure based on screenshot)
}

export interface NavItem {
  title: string;
  url: string;
  isNew?: boolean;
  isHot?: boolean;
}