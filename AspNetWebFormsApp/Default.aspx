<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AspNetWebFormsApp._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <script src="Scripts/jquery-2.2.4.js" type="text/javascript"></script>
    <script src="Scripts/bootstrap.js" type="text/javascript"></script>
    <script src="Scripts/respond.js" type="text/javascript"></script>

    <link href="Content/bootstrap.css" rel="stylesheet" />
    <script src="Scripts/modernizr-2.6.2.js"></script>
    <link href="Content/upload.css" rel="stylesheet" />
    <link href="Content/cornerstone.min.css" rel="stylesheet" />

    <script src="Scripts/cornerstone/cornerstone.min.js"></script>
    <script src="Scripts/cornerstone/cornerstoneWADOImageLoader.min.js"></script>

    <script src="Scripts/DICOMwebJS.js"></script>
    <script src="JSLib/uids.js"></script>
    <script src="dicomwebjs-demo.js"></script>
    <script src="Scripts/ace.js"></script>

    <!-- Wissem: This script queries through studies on page load -->
    <script>
        jQuery(function () {
            jQuery('#searchButton').click();
        });
    </script>

    <!-- Defines baseURL of serverList to "". Value was set to "http:localhost:55914" but now the server is embedded in the app. -->
    <div style="display: none">
        <label for="serverList" style="display: inline-block; color: black; padding: 10px">Server List:</label>
        <select class="form-control" id="serverList" name="serverList" style="width: auto; display: none">
            <option selected="selected" value="">/</option>
        </select>
    </div>

    <div role="tabpanel" class="tab-pane" id="_ViewerView" style="display: none">
        <div class="container dicomWeb-js-viewer">
            <div id="dicomImage" style="width: 100%; height: 512px; top: 0px; left: 0px;"></div>
        </div>
    </div>

    <div role="tabpanel" class="tab-pane active" id="_QueryFieldsView" style="padding-top: 2%">
        <div class="panel panel-info">
            <div class="panel-heading">Search</div>
            <div class="panel-body">
                <div class="col-sm-2">
                    <div class="form-group">
                        <label for="patientIdInput">Patient ID</label>
                        <input type="text" class="form-control  color-fill-dim-mid-alt" id="patientIdInput" placeholder="(e.g. 123-45-6789)" />
                    </div>
                    <div class="form-group">
                        <label for="patientNameInput">Patient Name</label>
                        <input type="text" class="form-control" id="patientNameInput" placeholder="(e.g. John)" />
                    </div>
                    <div class="form-group">
                        <label for="studyDateInput">Study Date</label>
                        <input type="datetime" class="form-control" id="studyDateInput" placeholder="(e.g. 20120502)" />
                    </div>
                    <div class="form-group">
                        <label for="studyIdInput">Study ID</label>
                        <input type="text" class="form-control" id="studyIdInput" placeholder="(e.g. 1)" />
                    </div>
                    <!-- Wissem: button that queries through the server's studies -->
                    <button type="submit" id="searchButton" class="btn btn-default">Search</button>
                </div>
                <div class="col-sm-10">
                    <div class="panel-group">
                        <div class="panel panel-default study-view clearfix">
                            <div class="panel-heading studies-title clearfix">
                                <a data-toggle="collapse" href="#studyCollapse">

                                    <h3 class="panel-title">
                                        <span>Studies</span>
                                        <span class="study-overview"></span>
                                        <span class="badge pull-right" data-pacs-study-count>0</span>
                                    </h3>
                                </a>
                            </div>

                            <div id="studyCollapse" class="panel-collapse collapse in">
                                <nav aria-label="...">
                                    <ul class="pagination pagination-study" style="margin: 0">
                                        <li class="page-item disabled page-first">
                                            <a class="page-link" href="#" tabindex="-1">First</a>
                                        </li>
                                        <li class="page-item disabled page-previous">
                                            <a class="page-link" href="#">Previous</a>
                                        </li>
                                        <li class="page-item">
                                            <span class="page-info"></span>
                                        </li>
                                        <li class="page-item disabled page-next">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                        <li class="page-item disabled page-last">
                                            <a class="page-link" href="#">Last</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="panel-body dicomWeb-js studies-query"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div role="tabpanel" class="tab-pane" id="_StoreView" style="display: inline-block; padding-top: 2.5%">
        <div>
            <div class="panel panel-primary">
                <div class="panel-heading">Store</div>
                <div class="panel-body">
                    <p>
                        Browse and upload your DICOM files to store them on our DICOM WADO server using the STOW–RS service. Then <strong>search</strong> your studies and retrieve them from the server using the QIDO-RS, WADO-RS and WADI-URI services by clicking on the SEARCH button.
                    </p>
                    <p>
                        By default, the DICOMcloud server will anonymize all DICOM datasets with default values for:
                                <ol>
                                    <li>Patient ID (0010,0020): <b>"Dcloud.Anonymized"</b></li>
                                    <li>Patient Name (0010,0010) <b>"Dcloud^Anonymized"</b></li>
                                </ol>
                    </p>
                    <p>
                        In order to change these values with your own, you must use a unique Patient ID that
                                doesn't already exists on the server with your preffered <b>Patient Name</b>
                    </p>

                    <div>
                        <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control app-anonymizer-field" data-app-tag="00100020" placeholder="Patient ID:">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control app-anonymizer-field" data-app-tag="00100010" placeholder="Patient Name:">
                            </div>
                        </form>
                    </div>

                    <div class="input-group">
                        <span class="input-group-btn">
                            <span class="btn btn-primary btn-file">Browse&hellip;
                                    <input id="getFile" class="btn btn-default" type="file" multiple>
                            </span>

                        </span>
                        <input id="displayName" type="text" class="form-control" readonly>
                        <span>
                            <!-- Button to upload DCM file to server -->
                            <input id="addFileButton" type="button" class="btn btn-default" value="Upload" />
                        </span>
                    </div>
                    <!-- Mozilla happens to be able to upload 500MB at one time. Chrome crashes with more that 100MB. Limited by bytearray usage -->
                    <p><span class="text-danger">*You can upload up to 100MB of DICOM files at one time. If you need to upload bigger files, please contact the support.</span></p>
                    <div class="store-result-view">
                        <hr />

                        <div class="progress">
                            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                <span class="sr-only">100% Complete</span>
                            </div>
                        </div>
                        <div class="store-result-body">
                            <div class="store-result-alert alert alert-success" role="alert" style="margin-bottom: 5px">
                                <h3 class="panel-title">
                                    <span class="store-result-title">Success!</span>
                                    <a data-toggle="collapse" class="alert-link" href="#storeResultCollapse">show details <i class="glyphicon glyphicon-collapse-down"></i></a>
                                </h3>
                            </div>

                            <div class="input-group">
                                <span class="input-group-addon">Image URL:</span>
                                <input type="text" class="form-control" placeholder="Image URL" id="image-url-input" />
                                <span class="input-group-addon" id="copy-image-url-button"
                                    data-toggle="tooltip" data-placement="button"
                                    title="Copy to Clipboard"
                                    data-clipboard-target="#image-url-input"
                                    role="button">
                                    <img width="14" src="/Content/img/clippy.svg" />
                                </span>
                                <span class="input-group-addon glyphicon glyphicon-save" id="dlownload-image-url-button"
                                    data-toggle="tooltip" data-placement="button" title="Download" role="button"></span>
                            </div>

                            <div id="storeResultCollapse" class="collapse">
                                <div class="panel-body dicomWeb-js store-result-content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
