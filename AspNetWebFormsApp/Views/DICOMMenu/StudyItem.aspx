<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StudyItem.aspx.cs" Inherits="AspNetWebFormsApp.Views.DICOMMenu.StudyItem" %>

<%@ Import Namespace="AspNetWebFormsApp.DICOM.Models" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="col-xs-6 col-sm-4 col-md-3">
            <button type="button" data-pacs-ohifviewer="" class="thumbnail">
                <div class="xcol-md-3">
                    <strong><span data-pacs-patientname="true"></span></strong>
                    (<strong><span data-pacs-patientid="true"></span></strong>)
                </div>
                <hr />
                <div class="xcol-md-2">
                    <span>Date:</span>
                    <span data-pacs-studydate="true"></span>
                </div>
                <div class="xcol-md-3">
                    <span>Description:</span>
                    <span data-pacs-studydesc="true"></span>
                </div>
                <div class="xcol-md-1">
                    <span>Study ID:</span>
                    <span data-pacs-studyid="true"></span>
                </div>
                <div class="xcol-md-1">
                    <span>Accession #:</span>
                    <span data-pacs-accessionnumber="true"></span>
                </div>
            </button>
            <button type="button" data-pacs-deletestudy="true" class="thumbnail" role="group" aria-label="..." style="height: 40px; text-align: center">Delete</button>
        </div>
    </form>
</body>
</html>

