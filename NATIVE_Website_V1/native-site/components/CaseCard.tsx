import type {CaseSlot} from '@/lib/cases';

export function CaseCard({item}:{item:CaseSlot}){return <article className="case-card">
  <div className="case-card-media" aria-hidden="true"><span>{item.id}</span><i /></div>
  <div className="case-card-meta"><span>{item.category}</span><span>{item.direction}</span></div>
  <h3>{item.status}</h3>
</article>}
