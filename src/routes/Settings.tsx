import { Card, CardContent, CardHeader, CardTitle, Switch, Separator, Button } from '@geenius-ui/react';
import { t } from '~/lib/i18n';

export function Settings() {
    return (
        <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl font-bold text-surface-foreground">{t('settings.title')}</h2>

            <Card>
                <CardHeader>
                    <CardTitle>{t('settings.general')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Switch label={t('settings.darkMode')} description={t('settings.darkMode.desc')} />
                    <Separator />
                    <Switch label={t('settings.notifications')} description={t('settings.notifications.desc')} defaultChecked />
                </CardContent>
            </Card>

            <Card className="border-danger/30">
                <CardHeader>
                    <CardTitle className="text-danger">{t('settings.dangerZone')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted mb-4">{t('settings.dangerZone.desc')}</p>
                    <Button variant="danger">{t('settings.deleteAccount')}</Button>
                </CardContent>
            </Card>
        </div>
    );
}
