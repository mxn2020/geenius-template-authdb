import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useQuery, useMutation } from 'convex/react';
import { Button, Card, CardContent, Input, Textarea, Badge, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, EmptyState } from '@geenius-ui/react';
import { api } from '../../convex/_generated/api';
import { t } from '~/lib/i18n';

export function Items() {
    const items = useQuery(api.library.items.list);
    const createItem = useMutation(api.library.items.create);
    const removeItem = useMutation(api.library.items.remove);

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = async () => {
        if (!title.trim()) return;
        await createItem({
            title: title.trim(),
            description: description.trim() || undefined,
            status: 'active',
        });
        setTitle('');
        setDescription('');
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-surface-foreground">{t('items.title')}</h2>
                    <p className="text-muted mt-1">{t('items.subtitle')}</p>
                </div>
                <Button variant="primary" icon={<Plus size={18} />} onClick={() => setShowForm(!showForm)}>
                    {t('items.addItem')}
                </Button>
            </div>

            {/* Create Form */}
            {showForm && (
                <Card>
                    <CardContent className="space-y-4">
                        <h3 className="font-semibold text-surface-foreground">{t('items.newItem')}</h3>
                        <Input
                            label={t('items.titleField')}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={t('items.titlePlaceholder')}
                        />
                        <Textarea
                            label={t('items.descriptionField')}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={t('items.descPlaceholder')}
                            resize="none"
                        />
                        <div className="flex gap-2">
                            <Button variant="primary" onClick={handleCreate}>
                                {t('common.create')}
                            </Button>
                            <Button variant="secondary" onClick={() => setShowForm(false)}>
                                {t('common.cancel')}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Items Table */}
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('items.titleField')}</TableHead>
                            <TableHead className="hidden sm:table-cell">{t('items.descriptionField')}</TableHead>
                            <TableHead>{t('items.status')}</TableHead>
                            <TableHead className="text-right">{t('items.actions')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items === undefined ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-muted">
                                    {t('common.loading')}
                                </TableCell>
                            </TableRow>
                        ) : items.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="py-8">
                                    <EmptyState
                                        title={t('items.noItems')}
                                        variant="default"
                                    />
                                </TableCell>
                            </TableRow>
                        ) : (
                            items.map((item) => (
                                <TableRow key={item._id}>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell className="hidden sm:table-cell text-muted">{item.description || '—'}</TableCell>
                                    <TableCell>
                                        <Badge variant={item.status === 'active' ? 'success' : 'default'} size="sm">
                                            {item.status || 'draft'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeItem({ id: item._id })}
                                        >
                                            <Trash2 size={16} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
