import Order from '@/pages/order/Order.vue'
import History from '@/pages/history/History.vue'
import Billing from '@/pages/billing/Billing.vue'
import Feedback from '@/pages/feedback/Feedback.vue'
import UserLayout from "@/layouts/UserLayout.vue";

const navbar = [
    {
        path: '/',
        redirect: '/order',
        component: UserLayout,
        children: [
            {
                path: '/order',
                name: 'navbar-order',
                title: 'Order',
                component: Order
            },
            {
                path: '/history',
                name: 'navbar-history',
                title: 'History',
                component: History
            },
            {
                path: '/billing',
                name: 'navbar-billing',
                title: 'Billing',
                component: Billing
            },
            {
                path: '/feedback',
                name: 'navbar-feedback',
                title: 'Feedback',
                component: Feedback
            }
        ]
    },

]

export default navbar