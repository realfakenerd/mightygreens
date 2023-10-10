interface Route {
    label: string;
    href: string;
}

const routes: Route[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Produtos',
        href: '/produtos'
    },
    {
        label: 'Onde encontrar',
        href: '/onde-encontrar'
    },
    {
        label: 'Onde produzimos',
        href: '/onde-produzimos'
    },
    {
        label: 'Sustentabilidade',
        href: '/sustentabilidade'
    },
    {
        label: 'Receitas',
        href: '/receitas'
    },
    {
        label: 'Mídia',
        href: '/midia'
    },
]

export default routes