using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Mvc;
using Microsoft.ApplicationInsights.Extensibility;
using WebApi.StructureMap;

namespace AspNetWebFormsApp
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(DICOM.WebApiConfig.Register);
            DICOM.FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            DICOM.RouteConfig.RegisterRoutes(RouteTable.Routes);
            DICOM.BundleConfig.RegisterBundles(BundleTable.Bundles);

            AddInsights();

            GlobalConfiguration.Configure(DICOM.DICOMcloudBuilder.ConfigureLogging);

            GlobalConfiguration.Configuration.UseStructureMap(x =>
            {
                x.AddRegistry<DICOM.DICOMcloudBuilder>();
            });
        }

        protected virtual void AddInsights()
        {
            if (WebConfigurationManager.AppSettings["APPINSIGHTS_INSTRUMENTATIONKEY"] != null)
            {
                TelemetryConfiguration.Active.InstrumentationKey = WebConfigurationManager.AppSettings["APPINSIGHTS_INSTRUMENTATIONKEY"];

                System.Diagnostics.Trace.TraceInformation("Insights key added");
            }
        }
    }
}