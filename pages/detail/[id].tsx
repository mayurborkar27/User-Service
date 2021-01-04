import { useRouter } from 'next/router'
import React from 'react'
import TenantsDetail from '../../components/tenants/admin/TenantsDetail';

const detail = () => {
    const router = useRouter();
    const { id } = router.query;

    return <TenantsDetail id ={id} />;
}

export default detail;
