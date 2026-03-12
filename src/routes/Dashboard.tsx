import { Database, BarChart3 } from 'lucide-react';
import { useQuery } from 'convex/react';
import { Card, CardContent } from '@geenius-ui/react';
import { api } from '../../convex/_generated/api';
import { t } from '~/lib/i18n';

export function Dashboard() {
    const items = useQuery(api.library.items.list);
    const itemCount = items?.length ?? 0;

    const stats = [
        { label: t('items.title'), value: String(itemCount), icon: Database, color: 'text-primary' },
        { label: t('items.status'), value: String(items?.filter((i) => i.status === 'active').length ?? 0), icon: BarChart3, color: 'text-success' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-surface-foreground">{t('dashboard.title')}</h2>
                <p className="text-muted mt-1">{t('dashboard.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat) => (
                    <Card key={stat.label} hover>
                        <CardContent>
                            <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                            <div className="text-2xl font-bold text-surface-foreground">{stat.value}</div>
                            <div className="text-sm text-muted mt-1">{stat.label}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardContent>
                    <h3 className="text-lg font-semibold text-surface-foreground mb-2">
                        {t('dashboard.getStarted.title')}
                    </h3>
                    <p className="text-muted">{t('dashboard.getStarted.desc')}</p>
                </CardContent>
            </Card>
        </div>
    );
}
