
export interface Asset {
  id: string;
  name: string;
  category: 'home' | 'jewelry' | 'electronics' | 'vehicle' | 'art';
  purchaseDate: string;
  price: number;
  description: string;
  image?: string;
  receipt?: string;
  location?: string;
}

export interface Transaction {
  id: string;
  assetId: string;
  date: string;
  amount: number;
  vendor: string;
  category: 'home' | 'jewelry' | 'electronics' | 'vehicle' | 'art';
}

export interface CategoryTotal {
  category: string;
  total: number;
  color: string;
}

// Sample user data
export const mockUser = {
  id: "user-1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "https://i.pravatar.cc/150?img=3"
};

// Sample asset data
export const mockAssets: Asset[] = [
  {
    id: "asset-1",
    name: "MacBook Pro",
    category: "electronics",
    purchaseDate: "2023-01-15",
    price: 2499.99,
    description: "16-inch MacBook Pro with M1 Max chip, 32GB RAM, 1TB SSD",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    location: "Home Office"
  },
  {
    id: "asset-2",
    name: "Diamond Ring",
    category: "jewelry",
    purchaseDate: "2023-02-14",
    price: 3500,
    description: "1.5 carat diamond engagement ring with platinum band",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    location: "Safe"
  },
  {
    id: "asset-3",
    name: "OLED TV",
    category: "electronics",
    purchaseDate: "2023-03-20",
    price: 1799.99,
    description: "65-inch OLED 4K Smart TV",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000&auto=format&fit=crop",
    location: "Living Room"
  },
  {
    id: "asset-4",
    name: "Kitchen Renovation",
    category: "home",
    purchaseDate: "2023-04-10",
    price: 25000,
    description: "Complete kitchen renovation including appliances and countertops",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop",
    location: "Kitchen"
  },
  {
    id: "asset-5",
    name: "Abstract Painting",
    category: "art",
    purchaseDate: "2023-05-05",
    price: 2800,
    description: "Original abstract painting by local artist Jane Doe",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
    location: "Dining Room"
  },
  {
    id: "asset-6",
    name: "Electric Bicycle",
    category: "vehicle",
    purchaseDate: "2023-06-15",
    price: 1999.99,
    description: "Electric mountain bike with 500W motor and 40-mile range",
    image: "https://images.unsplash.com/photo-1510228093593-c8b1f56b7cb0?q=80&w=1000&auto=format&fit=crop",
    location: "Garage"
  }
];

// Sample transaction data
export const mockTransactions: Transaction[] = [
  {
    id: "tx-1",
    assetId: "asset-1",
    date: "2023-01-15",
    amount: 2499.99,
    vendor: "Apple Store",
    category: "electronics"
  },
  {
    id: "tx-2",
    assetId: "asset-2",
    date: "2023-02-14",
    amount: 3500,
    vendor: "Tiffany & Co.",
    category: "jewelry"
  },
  {
    id: "tx-3",
    assetId: "asset-3",
    date: "2023-03-20",
    amount: 1799.99,
    vendor: "Best Buy",
    category: "electronics"
  },
  {
    id: "tx-4",
    assetId: "asset-4",
    date: "2023-04-10",
    amount: 25000,
    vendor: "Home Renovations Inc.",
    category: "home"
  },
  {
    id: "tx-5",
    assetId: "asset-5",
    date: "2023-05-05",
    amount: 2800,
    vendor: "Local Art Gallery",
    category: "art"
  },
  {
    id: "tx-6",
    assetId: "asset-6",
    date: "2023-06-15",
    amount: 1999.99,
    vendor: "Bike Shop",
    category: "vehicle"
  }
];

// Category totals for charts
export const mockCategoryTotals: CategoryTotal[] = [
  { category: "Electronics", total: 4299.98, color: "#4ade80" },
  { category: "Jewelry", total: 3500, color: "#a78bfa" },
  { category: "Home", total: 25000, color: "#60a5fa" },
  { category: "Art", total: 2800, color: "#f472b6" },
  { category: "Vehicle", total: 1999.99, color: "#fb923c" }
];

// Date formatter
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Price formatter
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
