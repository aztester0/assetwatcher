
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Table } from "lucide-react";
import { toast } from "sonner";

const ExportOptions: React.FC = () => {
  const handleExportCSV = () => {
    // Simulate download in a real app this would be a real CSV export
    setTimeout(() => {
      toast.success("CSV file downloaded successfully");
    }, 800);
  };

  const handleExportHTML = () => {
    // Simulate download in a real app this would be a real HTML export
    setTimeout(() => {
      toast.success("HTML report generated successfully");
    }, 800);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        onClick={handleExportCSV}
        variant="outline"
        className="group"
      >
        <Table className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        Export as CSV
      </Button>
      
      <Button
        onClick={handleExportHTML}
        variant="outline"
        className="group"
      >
        <FileText className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        Export as HTML
      </Button>
      
      <Button
        onClick={() => window.print()}
        variant="outline"
        className="group"
      >
        <Download className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        Print Report
      </Button>
    </div>
  );
};

export default ExportOptions;
