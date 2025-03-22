
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TransactionCard from "@/components/TransactionCard";
import ExportOptions from "@/components/ExportOptions";
import { mockAssets, mockTransactions, formatCurrency, formatDate } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Pencil, 
  Trash2,
  Info 
} from "lucide-react";
import { toast } from "sonner";

const AssetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const asset = mockAssets.find(a => a.id === id);
  const assetTransactions = mockTransactions.filter(t => t.assetId === id);

  if (!asset) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 animate-fade-in">
          <Info className="h-12 w-12 text-muted-foreground mx-auto" />
          <h1 className="text-2xl font-bold">Asset Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn't find the asset you're looking for. It may have been removed or the ID is incorrect.
          </p>
          <Button onClick={() => navigate("/dashboard")}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    // In a real app, this would call an API
    toast.success("Asset deleted successfully");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 page-transition-container">
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{asset.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className={`category-${asset.category}`}>
                  {asset.category.charAt(0).toUpperCase() + asset.category.slice(1)}
                </Badge>
                <span className="text-muted-foreground text-sm">
                  ID: {asset.id}
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-1">
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                className="gap-1"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {/* Asset image */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted animate-blur-in">
                {asset.image ? (
                  <img
                    src={asset.image}
                    alt={asset.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary">
                    <span className="text-muted-foreground">No image available</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Description */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{asset.description}</p>
              </CardContent>
            </Card>

            {/* Transactions */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                {assetTransactions.length > 0 ? (
                  <div className="space-y-4">
                    {assetTransactions.map(transaction => (
                      <TransactionCard 
                        key={transaction.id} 
                        transaction={transaction} 
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No transactions found for this asset</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Asset details */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Asset Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Purchase Date</p>
                    <p className="font-medium">{formatDate(asset.purchaseDate)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Purchase Price</p>
                    <p className="font-medium">{formatCurrency(asset.price)}</p>
                  </div>
                </div>

                {asset.location && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{asset.location}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                {asset.receipt ? (
                  <a href="#" className="flex items-center gap-2 p-3 rounded-md hover:bg-secondary/70 transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Receipt</p>
                      <p className="text-sm text-muted-foreground">PDF Document</p>
                    </div>
                  </a>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">No documents attached</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Add Document
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Export options */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ExportOptions />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AssetDetail;
