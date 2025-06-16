
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface UploadCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const UploadCard = ({ title, description, icon: Icon, onClick }: UploadCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <Button onClick={onClick} className="w-full">
          Start Upload
        </Button>
      </CardContent>
    </Card>
  );
};

export default UploadCard;
