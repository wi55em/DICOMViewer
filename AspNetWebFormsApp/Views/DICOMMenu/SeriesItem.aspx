<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SeriesItem.aspx.cs" Inherits="AspNetWebFormsApp.Views.DICOMMenu.SeriesItem" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="panel-body thumbnail">
                <div class="xcol-md-3">
                    <strong><span>Series #:</span></strong>
                    <strong><span data-pacs-seriesnum="true"></span></strong>
                </div>
                <hr />
                <div class="xcol-md-2">
                    <span>Modality:</span>
                    <span data-pacs-modality="true"></span>
                </div>
                <div class="xcol-md-2">
                    <span>Series Date:</span>
                    <span data-pacs-seriesdate="true"></span>
                </div>
                <div class="xcol-md-3">
                    <span>Series Description:</span>
                    <span data-pacs-seriesdesc="true"></span>
                </div>
            </div>

            <div class="panel-footer">
                <div class="btn-group btn-group-justified" role="group">
                    <div class="btn-group dropup">
                        <a href="#" type="button" role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">QIDO-RS
                    <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-pacs-viewqidoseries="json">JSON</a></li>
                            <li><a href="#" data-pacs-viewqidoseries="xml">DIOCM XML</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropup">
                        <a href="#" role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RS-Series 
                    <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-pacs-series-json>JSON</a></li>
                            <li><a href="#" data-pacs-series-xml>DIOCM+XML</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </form>
</body>
</html>
