
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface UploadCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  hideButton?: boolean;
}

const UploadCard = ({ title, description, icon: Icon, onClick, hideButton = false }: UploadCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full" onClick={onClick}>
      <CardContent className="p-4 text-center h-full flex flex-col justify-center">
        <div className="mb-3 flex justify-center">
          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

export default UploadCard;
