
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Check, Image, FileText } from "lucide-react";

interface FileUploadProps {
  label: string;
  accept?: string;
  id: string;
  type?: "image" | "document";
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = "image/*",
  id,
  type = "image",
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      if (type === "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      {!file ? (
        <div className="border border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/30 transition-colors cursor-pointer">
          <input
            type="file"
            id={id}
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor={id} className="cursor-pointer block">
            <div className="flex flex-col items-center gap-2">
              <div className="p-2 rounded-full bg-primary/20 text-primary">
                <Upload className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Click to upload {type}</p>
              <p className="text-xs text-muted-foreground">
                {type === "image" ? "PNG, JPG or GIF up to 5MB" : "PDF, DOC up to 10MB"}
              </p>
            </div>
          </label>
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20 text-primary">
                {type === "image" ? (
                  <Image className="h-5 w-5" />
                ) : (
                  <FileText className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium line-clamp-1">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={clearFile}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-primary/10"
              >
                <Check className="h-4 w-4 text-primary" />
              </Button>
            </div>
          </div>

          {type === "image" && preview && (
            <div className="mt-3">
              <img
                src={preview}
                alt="Preview"
                className="rounded-md max-h-40 mx-auto object-contain"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
