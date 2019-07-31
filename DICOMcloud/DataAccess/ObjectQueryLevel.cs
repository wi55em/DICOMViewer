using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DICOMcloud
{
    public enum ObjectQueryLevel
    {
        DICOM_STUDY,
        DICOM_SERIES,
        DICOM__OBJECT_INSTANCE,
        Unknown
    }

    public abstract class ObjectQueryLevelConstants
    { 
        public static readonly string Study = Enum.GetName(typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM_STUDY);
        public static readonly string Series = Enum.GetName(typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM_SERIES);
        public static readonly string Instance = Enum.GetName(typeof(ObjectQueryLevel), ObjectQueryLevel.DICOM__OBJECT_INSTANCE);
    }
}
