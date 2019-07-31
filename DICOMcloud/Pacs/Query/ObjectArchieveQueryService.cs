using DICOMcloud.Pacs;
using DICOMcloud.DataAccess;
using DICOMcloud.DataAccess.Matching;
using System;
using System.Collections.Generic;
using fo = Dicom;


namespace DICOMcloud.Pacs
{
    public class ObjectArchieveQueryService : DicomQueryServiceBase, IObjectArchieveQueryService
    {
        public ObjectArchieveQueryService ( IObjectArchieveDataAccess dataAccess ) : base ( dataAccess )
        {}

        public IEnumerable<fo.DicomDataset> FindStudies 
        ( 
            fo.DicomDataset request, 
            IQueryOptions options
        )
        {
            return Find ( request, options, Enum.GetName (typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM_STUDY ) ) ;
        }

        public IEnumerable<fo.DicomDataset> FindObjectInstances
        (
            fo.DicomDataset request,
            IQueryOptions options
        )
        {
            return Find ( request, options, Enum.GetName (typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM__OBJECT_INSTANCE ) ) ;
        }

        public IEnumerable<fo.DicomDataset> FindSeries
        (
            fo.DicomDataset request,
            IQueryOptions options
        )
        {
            return Find ( request, options, Enum.GetName (typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM_SERIES ) ) ;
        }

        protected override IEnumerable<fo.DicomDataset> DoFind
        (
           fo.DicomDataset request,
           IQueryOptions options,
           string queryLevel,
           IEnumerable<IMatchingCondition> conditions
        )
        {
            return QueryDataAccess.Search ( conditions, options, queryLevel ) ;
        }


        public PagedResult<fo.DicomDataset> FindStudiesPaged
        ( 
            fo.DicomDataset request, 
            IQueryOptions options
        )
        {
            return FindPaged ( request, options, Enum.GetName (typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM_STUDY ) ) ;
        }

        public PagedResult<fo.DicomDataset> FindObjectInstancesPaged
        (
            fo.DicomDataset request,
            IQueryOptions options
        )
        {
            return FindPaged ( request, options, Enum.GetName (typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM__OBJECT_INSTANCE ) ) ;
        }

        public PagedResult<fo.DicomDataset> FindSeriesPaged
        (
            fo.DicomDataset request,
            IQueryOptions options
        )
        {
            return FindPaged ( request, options, Enum.GetName (typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM_SERIES ) ) ;
        }

        protected override PagedResult<fo.DicomDataset> DoFindPaged
        (
           fo.DicomDataset request,
           IQueryOptions options,
           string queryLevel,
           IEnumerable<IMatchingCondition> conditions
        )
        {
            return QueryDataAccess.SearchPaged ( conditions, options, queryLevel ) ;
        }
    }
}
