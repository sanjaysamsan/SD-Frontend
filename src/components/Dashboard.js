// import React from 'react';
import './dashboard.css';
import { Piechart } from './charts/Piechart';
import Linechart from './charts/Linechart';
import Doughnutchart from './charts/Doughnutchart';
import Barchart from './charts/Barcharts';
import Areachart from './charts/Areachart'
import React,{useState} from 'react';
import PolarChart from './charts/Polarchart';

function Dashboard() {

    const [style,setStyle]=useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
  const  changeStyle =() => {
    if(style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    {
        setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
    }
    else{
        setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")    
    }
  }

  return (
    <div>
      <body id="page-top">

{/* <!-- Page Wrapper --> */}
<div id="wrapper" >

    {/* <!-- Sidebar --> */}
    <ul className={style} id="accordionSidebar">


        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-fw fa-address-book"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SOC DASHBOARD</div>


        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <a className="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Interface
        </div>

        {/* <!-- Nav Item - PRISMA CLOUD--> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#"
                aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cloud"></i>
                <span>PRISMACLOUD</span>
                </a>
            
        </li>

        {/* <!-- Nav Item - DATABOG --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" 
                aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-paw"></i>
                <span>DATADOG</span>
            </a>
            
        </li>


{/* <!-- Nav Item - THREAT INTELLIGENCE --> */}
<li className="nav-item">
            <a className="nav-link collapsed" href="#" 
                aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-exclamation"></i>
                <span>THREAT INTELLIGENCE</span>
            </a>
            
        </li>

        {/* <!-- Nav Item - OTHER --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#"
                aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-question"></i>
                <span>OTHERS</span>
            </a>
            
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
{/* 
        <!-- Heading --> */}
        <div className="sidebar-heading">
            Addons
        </div>

       

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

{/* <!-- Divider --> */}
<hr class="sidebar-divider d-none d-md-block" />

{/* <!-- Sidebar Toggler (Sidebar) --> */}
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
</div>

    </ul>
    {/* <!-- End of Sidebar --> */}
{/* 
    <!-- Content Wrapper --> */}
    <div id="content-wrapper" className="d-flex flex-column">
        

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <h3><b>CONTINENTAL</b></h3>

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                
{/* 
                <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        
                        {/* <!-- Dropdown - Messages --> */}
                        {/* <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}
                    <li className="nav-item dropdown no-arrow mt-3">
                    <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group mr-2">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>
                        
                        
                    </li>
                  

                    <div className="topbar-divider d-none d-sm-block"></div>
{/* 
                    <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">User</span>
                            <img className="img-profile rounded-circle"
                                src="img/undraw_profile.svg" />
                        </a>
                        {/* <!-- Dropdown - User Information --> */}
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                
              
                <div className="row"> 

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">PIE CHART</h6>
                                
                                
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                
                            <div className="chart-pie pt-4 pb-2">
                                        <div>
                                            <Piechart />
                                        </div>
                                    </div>
                                        <canvas id="myPieChart"></canvas> 
                                        
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">LINE CHART</h6>
                                
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-Line pt-4 pb-2">
                                    <div>
                                        <Linechart />
                                    </div>
                                    {/* <canvas id="myPieChart"></canvas> */}
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">BAR CHART</h6>
                                
                                
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                
                            <div className="chart-pie pt-4 pb-2">
                                        <div>
                                            <Barchart />
                                        </div>
                                    </div>
                                        <canvas id="myPieChart"></canvas> 
                                        
                            </div>
                        </div>
                    </div>

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">DOUGHNUT CHART</h6>
                                
                                
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                
                            <div className="chart-pie pt-4 pb-2">
                                        <div>
                                            <Doughnutchart />
                                        </div>
                                    </div>
                                        <canvas id="myPieChart"></canvas> 
                                        
                            </div>
                        </div>
                    </div>


                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">AREA CHART</h6>
                                
                                
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                
                            <div className="chart-pie pt-4 pb-2">
                                        <div>
                                            <Areachart />
                                        </div>
                                    </div>
                                        <canvas id="myPieChart"></canvas> 
                                        
                            </div>
                        </div>
                    </div>

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">POLAR CHART</h6>
                                
                                
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                
                            <div className="chart-pie pt-4 pb-2">
                                        <div>
                                            <PolarChart />
                                        </div>
                                    </div>
                                        <canvas id="myPieChart"></canvas> 
                                        
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- /.container-fluid --> */}

        {/* </div>
        <!-- End of Main Content --> */}

        

    </div>
    {/* <!-- End of Content Wrapper --> */}

</div>
{/* <!-- End of Page Wrapper --> */}

{/* <!-- Scroll to Top Button--> */}
<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a> 

{/* <!-- Logout Modal--> */}
<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>
</div>

</body>
    </div>
  )
}

export default Dashboard;
