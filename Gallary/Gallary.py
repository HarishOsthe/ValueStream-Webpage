import pandas as pd
import os

allDir=list()
def getListOfFiles(dirName):
    listOfFile = os.listdir(dirName)
    allFiles = list()
    for entry in listOfFile:
        if entry.startswith('.')!=True:
            fullPath = os.path.join(dirName, entry)
            if os.path.isdir(fullPath):
                allDir.append(entry)
                allFiles = allFiles + getListOfFiles(fullPath)
            else:
                allFiles.append(fullPath)
    return [i for i in allFiles if i.endswith(('.jpg','jpeg','.png','.PNG','.JPG','.JPEG'))]

listOfFiles=getListOfFiles('.')

my_dict=dict(
    FolderName=[],
    FolderContents=[],
    FolderContentCount=[],
)

for j in allDir:
    my_dict["FolderName"].append(j)
    li=[]
    for i in listOfFiles:
        if i.startswith(f'./{j}/'):
            li.append(i)
    my_dict["FolderContents"].append(li)
    my_dict["FolderContentCount"].append(len(li))
    
pd.DataFrame(my_dict).to_csv('folderNames.csv',index=False)