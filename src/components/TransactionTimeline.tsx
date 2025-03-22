
import React from "react";
import { mockTransactions, formatCurrency, formatDate } from "@/lib/mockData";
import { Link } from "react-router-dom";

const TransactionTimeline: React.FC = () => {
  const sortedTransactions = [...mockTransactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6 py-2">
      {sortedTransactions.map((transaction, index) => (
        <div key={transaction.id} className="relative pl-8">
          {/* Timeline dot and line */}
          <div className="absolute left-0 top-1">
            <div className={`h-4 w-4 rounded-full bg-primary ring-4 ring-background`} />
            {index !== sortedTransactions.length - 1 && (
              <div className="absolute top-4 bottom-0 left-2 w-px -translate-x-1/2 bg-border" />
            )}
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium">{formatDate(transaction.date)}</p>
              <span className={`category-pill category-${transaction.category}`}>
                {transaction.category.charAt(0).toUpperCase() + transaction.category.slice(1)}
              </span>
            </div>

            <div className="glass rounded-lg mt-2 p-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Link 
                    to={`/assets/${transaction.assetId}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {transaction.vendor}
                  </Link>
                  <p className="text-muted-foreground text-sm">{transaction.id}</p>
                </div>
                <span className="font-semibold">{formatCurrency(transaction.amount)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionTimeline;
