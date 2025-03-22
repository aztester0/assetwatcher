
import React from "react";
import { Link } from "react-router-dom";
import { Transaction, formatCurrency, formatDate, mockAssets } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const asset = mockAssets.find(a => a.id === transaction.assetId);
  
  return (
    <Card className="overflow-hidden hover-scale card-hover">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <Link to={`/assets/${transaction.assetId}`} className="hover:underline">
              <h3 className="font-medium">{asset?.name || 'Unknown Asset'}</h3>
            </Link>
            <p className="text-muted-foreground text-sm">
              {transaction.vendor} • {formatDate(transaction.date)}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-medium">{formatCurrency(transaction.amount)}</span>
            <span className={`category-pill category-${transaction.category} mt-1`}>
              {transaction.category.charAt(0).toUpperCase() + transaction.category.slice(1)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
