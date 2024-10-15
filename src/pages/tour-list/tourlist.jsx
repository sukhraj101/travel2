import React from 'react'
import Sidebar from './sidebar'
import Listing from './listing'

export default function Tourlist() {
  return (
    <>
        <div className="container pt-5 pt-xl-8">
            <div className="row mb-5 mb-md-8 mt-xl-1 pb-md-1">
                <div className="col-lg-4 col-xl-3 order-lg-1 width-md-50">
                    <Sidebar />
                </div>
                <div className="col-lg-8 col-xl-9 order-md-1 order-lg-2">
                    <Listing/>
                </div>
            </div>
        </div>
    </>
  )
}
