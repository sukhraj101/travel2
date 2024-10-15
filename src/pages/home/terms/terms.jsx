import React from 'react'
import MyTabs from './tabs'
import PageHeader from '../../../components/common/page-header'

export default function Terms() {
    const breadcrumbs = [
        { label: 'Home', link: '/', active: false },
        { label: 'Terms And Condition', active: true }
    ];
  return (
    <>
        <PageHeader 
            title="Terms And Condition"
            breadcrumbs={breadcrumbs}
        />
        <MyTabs/>
    </>
  )
}
