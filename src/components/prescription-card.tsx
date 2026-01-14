import type { PrescriptionData } from '@/data/prescriptions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pill, FileText } from 'lucide-react';

type PrescriptionCardProps = {
  data: PrescriptionData;
};

export default function PrescriptionCard({ data }: PrescriptionCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="font-headline text-lg font-semibold md:text-xl">{data.condition}</CardTitle>
          <Badge variant="secondary" className="shrink-0">{data.category}</Badge>
        </div>
        <CardDescription className="flex flex-wrap gap-1 pt-2">
            {data.tags.map((tag) => <Badge variant="outline" key={tag} className="text-xs">{tag}</Badge>)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Pill className="h-4 w-4" />
                Posologia e Via
            </h3>
            <ul className="space-y-3">
                {data.prescriptions.map((p, index) => (
                    <li key={`${p.drug}-${index}`} className="grid grid-cols-[auto,1fr] gap-x-2 text-sm">
                        <strong className="font-semibold col-start-2">{p.drug}</strong>
                        <div className="col-start-2 text-muted-foreground">
                            <span>{p.dosage}</span> • <span>{p.route}</span> • <span>{p.frequency}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </CardContent>
      {data.clinicalNotes && (
        <CardFooter className="bg-muted/50 p-4">
            <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-xs font-semibold">
                    <FileText className="h-4 w-4" />
                    Manejo Clínico e Notas
                </h3>
                <p className="text-xs text-muted-foreground">{data.clinicalNotes}</p>
            </div>
        </CardFooter>
      )}
    </Card>
  );
}
