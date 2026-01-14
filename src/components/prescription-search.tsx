"use client";

import { useMemo } from 'react';
import { prescriptionsData } from '@/data/prescriptions';
import PrescriptionCard from './prescription-card';
import { Frown } from 'lucide-react';

type PrescriptionSearchProps = {
  searchQuery: string;
};

export default function PrescriptionSearch({ searchQuery }: PrescriptionSearchProps) {
  const filteredPrescriptions = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return prescriptionsData;

    const searchTerms = trimmedQuery.toLowerCase().split(' ').filter(term => term);

    return prescriptionsData.filter(item => {
      // Check if all search terms are present in the prescription data
      return searchTerms.every(term => {
        const inCondition = item.condition.toLowerCase().includes(term);
        const inTags = item.tags.some(tag => tag.toLowerCase().includes(term));
        const inDrugs = item.prescriptions.some(p => p.drug.toLowerCase().includes(term));
        
        return inCondition || inTags || inDrugs;
      });
    });
  }, [searchQuery]);

  if (filteredPrescriptions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
        <Frown className="h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">Nenhum resultado encontrado</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente ajustar sua busca ou verifique a ortografia.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredPrescriptions.map(item => (
        <PrescriptionCard key={item.id} data={item} />
      ))}
    </div>
  );
}
