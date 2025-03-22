
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AssetCard from "@/components/AssetCard";
import TransactionCard from "@/components/TransactionCard";
import CategoryPieChart from "@/components/CategoryPieChart";
import ExportOptions from "@/components/ExportOptions";
import { mockAssets, mockTransactions, formatCurrency } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowRight, DollarSign, Package, Calendar } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Calculate total value of assets
  const totalValue = mockAssets.reduce((sum, asset) => sum + asset.price, 0);
  
  // Get latest transactions
  const latestTransactions = [...mockTransactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 page-transition-container">
        <header className="mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Track and manage your valuable assets
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Assets Card */}
          <Card className="glass animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Assets</p>
                  <p className="text-2xl font-bold mt-1">{mockAssets.length}</p>
                </div>
                <div className="p-3 rounded-full bg-primary/20">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Total Value Card */}
          <Card className="glass animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Value</p>
                  <p className="text-2xl font-bold mt-1">{formatCurrency(totalValue)}</p>
                </div>
                <div className="p-3 rounded-full bg-primary/20">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest Purchase Card */}
          <Card className="glass animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Latest Purchase</p>
                  <p className="text-2xl font-bold mt-1">
                    {new Date(mockAssets[0].purchaseDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category distribution */}
              <Card className="col-span-1 animate-fade-in-right">
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <CategoryPieChart />
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="col-span-1 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Transactions</CardTitle>
                  <Link to="/dashboard?tab=transactions">
                    <Button variant="ghost" size="sm" className="text-xs gap-1">
                      View all <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {latestTransactions.map((transaction) => (
                      <TransactionCard 
                        key={transaction.id} 
                        transaction={transaction} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="animate-fade-in">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Export Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ExportOptions />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="assets">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Assets</h2>
              <Link to="/add-asset">
                <Button className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add Asset
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAssets.map((asset, index) => (
                <div 
                  key={asset.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AssetCard asset={asset} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <ExportOptions />
            </div>

            <div className="space-y-4">
              {mockTransactions.map((transaction, index) => (
                <div 
                  key={transaction.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TransactionCard transaction={transaction} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
