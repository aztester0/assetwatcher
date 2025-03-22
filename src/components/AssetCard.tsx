
import React from "react";
import { Link } from "react-router-dom";
import { Asset, formatCurrency, formatDate } from "@/lib/mockData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AssetCardProps {
  asset: Asset;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <Link to={`/assets/${asset.id}`} className="block">
      <Card className="overflow-hidden hover-scale card-hover h-full">
        <AspectRatio ratio={16 / 9}>
          <div className="h-full w-full relative bg-muted/50">
            {asset.image ? (
              <img
                src={asset.image}
                alt={asset.name}
                className="h-full w-full object-cover transition-all"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
        </AspectRatio>
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-semibold line-clamp-1 text-lg">{asset.name}</h3>
            <span className={`category-pill category-${asset.category}`}>
              {asset.category.charAt(0).toUpperCase() + asset.category.slice(1)}
            </span>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm mb-2">
            {asset.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0 border-t border-border/50">
          <span className="text-muted-foreground text-sm">
            {formatDate(asset.purchaseDate)}
          </span>
          <span className="font-medium">{formatCurrency(asset.price)}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AssetCard;
