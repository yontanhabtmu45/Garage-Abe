import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import AddVichelForm from '../../components/Admin/AddVichelForm/AddVichelForm'

function AddOrders() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddVichelForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOrders