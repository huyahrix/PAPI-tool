let arraySample = [];
    arraySample.push({
      query: `\
EXEC W75P2112 @DivisionID, @UserID, @HostID, @TransID, @EmployeeID, @LeaveDateFrom, @LeaveDateTo, @LeaveTypeID, @Quantity, @Mode, @Reason, @IsRegisterType, @FormID, @1stAbsDayQuan, @LastAbsDayQuan, @ReasonCancel 
DELETE FROM D91T1010 WHERE KeyID = '15RL0Y700000315' And TableName = 'D15T2030_WebHR' AND DivisionID = 'QT'`,
      params: `\
[{ key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'UserID', type: 'VARCHAR', value: '00150' },
{ key: 'HostID', type: 'VARCHAR', value: '' },
{ key: 'TransID', type: 'VARCHAR', value: '15RL0Y700000314' },
{ key: 'EmployeeID', type: 'VARCHAR', value: '04050' },
{ key: 'LeaveDateFrom', type: 'VARCHAR', value: '2020-04-16' },
{ key: 'LeaveDateTo', type: 'VARCHAR', value: '2020-04-18' },
{ key: 'LeaveTypeID', type: 'VARCHAR', value: 'L020' },
{ key: 'Quantity', type: 'DECIMAL', value: 2.5 },
{ key: 'Mode', type: 'INT', value: 0 },
{ key: 'Reason', type: 'NVARCHAR', value: '' },
{ key: 'IsRegisterType', type: 'TINYINT', value: 0 },
{ key: 'FormID', type: 'VARCHAR', value: 'W75F2000' },
{ key: '1stAbsDayQuan', type: 'DECIMAL28', value: 0.5 },
{ key: 'LastAbsDayQuan', type: 'DECIMAL28', value: 1 },
{ key: 'ReasonCancel', type: 'VARCHAR', value: '' } ]`
    });
    arraySample.push({
      query: `EXEC W75P2005 @UserID, @HostID, @EmployeeID, @AppStatusID, @TimeID, @Language, @Skip, @Limit`,
      params: `\[{"name":"EmployeeID","type":"VARCHAR","value":""},{"name":"HostID","type":"VARCHAR","value":""},{"name":"AppStatusID","type":"VARCHAR","value":""},{"name":"TimeID","type":"VARCHAR","value":"0"},{"name":"UserID","type":"VARCHAR","value":"00142"},{"name":"Language","type":"VARCHAR","value":"84"},{"name":"Skip","type":"VARCHAR","value":"0"},{"name":"Limit","type":"VARCHAR","value":"10"}]`
    });
    arraySample.push({
      query: `EXEC W75P2112 @DivisionID, @UserID, @HostID, @TransID, @EmployeeID, @LeaveDateFrom, @LeaveDateTo, @LeaveTypeID, @Quantity, @Mode, @Reason, @IsRegisterType, @FormID, @1stAbsDayQuan, @LastAbsDayQuan, @ReasonCancel
DELETE FROM D91T1010 WHERE KeyID = @KeyID And TableName = @TableName AND DivisionID = @DivisionID
INSERT INTO D91T1010
(
  DivisionID, KeyID, TableName, AttachmentID,
  Sequence, URL, FileName, FileSize,
  FileExt, CreateUserID, LastModifyUserID, CreateDate,
  LastModifyDate, IsCDN, Description, DescriptionU, Key2ID
)
VALUES
(
  @DivisionID, @KeyID, @TableName, @AttachmentID0,
  0, @URL0, @FileName0, @FileSize0,
  @FileExt0, @CreateUserID, @CreateUserID, @CreateDate,
  @LastModifyDate, 1, @Description0, @DescriptionU0, @Key2ID
),
(
  @DivisionID, @KeyID, @TableName, @AttachmentID1,
  0, @URL1, @FileName1, @FileSize1,
  @FileExt1, @CreateUserID, @CreateUserID, @CreateDate,
  @LastModifyDate, 1, @Description1, @DescriptionU1, @Key2ID
)`,
      params: `[ { key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'UserID', type: 'VARCHAR', value: '00142' },
{ key: 'HostID', type: 'VARCHAR', value: '' },
{ key: 'TransID', type: 'VARCHAR', value: '15RL0Y700000338' },
{ key: 'EmployeeID', type: 'VARCHAR', value: '00145' },
{ key: 'LeaveDateFrom', type: 'VARCHAR', value: '2020-04-24' },
{ key: 'LeaveDateTo', type: 'VARCHAR', value: '2020-04-24' },
{ key: 'LeaveTypeID', type: 'VARCHAR', value: 'L0701' },
{ key: 'Quantity', type: 'DECIMAL28', value: '1' },
{ key: 'Mode', type: 'INT', value: 0 },
{ key: 'Reason', type: 'NVARCHAR', value: '' },
{ key: 'IsRegisterType', type: 'TINYINT', value: '0' },
{ key: 'FormID', type: 'VARCHAR', value: 'W75F2000' },
{ key: '1stAbsDayQuan', type: 'DECIMAL28', value: 0 },
{ key: 'LastAbsDayQuan', type: 'DECIMAL28', value: 0 },
{ key: 'ReasonCancel', type: 'VARCHAR', value: '' },
{ key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'KeyID', type: 'VARCHAR', value: '15RL0Y700000338' },
{ key: 'TableName', type: 'VARCHAR', value: 'D15T2030_WebHR' },
{ key: 'AttachmentID0',
  type: 'VARCHAR',
  value: 'ATT00000000000000000000000000000000000000700003646' },
{ key: 'URL0',
  type: 'VARCHAR',
  value:
    'file/67670250-68e0-4eb2-93b9-3410fd648940.xlsx?path=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7InBhdGgiOiIvMjAxOS8xMS82NTU0M2U1ZC1iYTgyLTRiMmEtYjRlNC0zMGZkMzJmZTZhY2QueGxzeCIsIm9yaWdpbmFsRmlsZU5hbWUiOiI2NzY3MDI1MC02OGUwLTRlYjItOTNiOS0zNDEwZmQ2NDg5NDAueGxzeCIsImZpbGVTaXplIjozNDg0NiwiZmlsZVR5cGUiOiJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCIsInB1cmwiOiJodHRwOi8vYXByaWNvdC5kaWdpbmV0LmNvbS52bjo2MDQwIiwiaXVybCI6Imh0dHA6Ly8xMC4wLjAuOTk6NjA0MCJ9XSwiaWF0IjoxNTcyNTk0NjQ4LCJleHAiOjg3OTcyNTk0NjQ4fQ.__12HK8o3op2Eg60ZaULq59KveSBun2bwgTtRye-M5g' },
{ key: 'FileName0',
  type: 'NVARCHAR',
  value: '670250-68e0-4eb2-93b9-3410fd648940' },
{ key: 'FileSize0', type: 'DECIMAL', value: 12312 },
{ key: 'FileExt0', type: 'VARCHAR', value: 'xlsx' },
{ key: 'CreateUserID', type: 'VARCHAR', value: '00142' },
{ key: 'CreateDate',
  type: 'VARCHAR',
  value: '2020-04-28 16:36:20.141' },
{ key: 'LastModifyDate',
  type: 'VARCHAR',
  value: '2020-04-28 16:36:20.141' },
{ key: 'Description0', type: 'VARCHAR', value: 'english' },
{ key: 'DescriptionU0', type: 'NVARCHAR', value: 'việt nam' },
{ key: 'Key2ID', type: 'VARCHAR', value: '' },
{ key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'KeyID', type: 'VARCHAR', value: '15RL0Y700000338' },
{ key: 'TableName', type: 'VARCHAR', value: 'D15T2030_WebHR' },
{ key: 'AttachmentID1',
  type: 'VARCHAR',
  value: 'ATT00000000000000000000000000000000000000700003647' },
{ key: 'URL1',
  type: 'VARCHAR',
  value:
    'file/67670250-68e0-4eb2-93b9-3410fd648940.xlsx?path=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7InBhdGgiOiIvMjAxOS8xMS82NTU0M2U1ZC1iYTgyLTRiMmEtYjRlNC0zMGZkMzJmZTZhY2QueGxzeCIsIm9yaWdpbmFsRmlsZU5hbWUiOiI2NzY3MDI1MC02OGUwLTRlYjItOTNiOS0zNDEwZmQ2NDg5NDAueGxzeCIsImZpbGVTaXplIjozNDg0NiwiZmlsZVR5cGUiOiJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCIsInB1cmwiOiJodHRwOi8vYXByaWNvdC5kaWdpbmV0LmNvbS52bjo2MDQwIiwiaXVybCI6Imh0dHA6Ly8xMC4wLjAuOTk6NjA0MCJ9XSwiaWF0IjoxNTcyNTk0NjQ4LCJleHAiOjg3OTcyNTk0NjQ4fQ.__12HK8o3op2Eg60ZaULq59KveSBun2bwgTtRye-M5g' },
{ key: 'FileName1',
  type: 'NVARCHAR',
  value: '670250-68e0-4eb2-93b9-3410fd648940' },
{ key: 'FileSize1', type: 'DECIMAL', value: 12222 },
{ key: 'FileExt1', type: 'VARCHAR', value: '.xlsx' },
{ key: 'CreateUserID', type: 'VARCHAR', value: '00142' },
{ key: 'CreateDate',
  type: 'VARCHAR',
  value: '2020-04-28 16:36:20.141' },
{ key: 'LastModifyDate',
  type: 'VARCHAR',
  value: '2020-04-28 16:36:20.141' },
{ key: 'Description1', type: 'VARCHAR', value: 'english123' },
{ key: 'DescriptionU1', type: 'NVARCHAR', value: 'việt nam 123' },
{ key: 'Key2ID', type: 'VARCHAR', value: '' } ]`
    });

    arraySample.push({
      query: `UPDATE   D84T2000
SET     ApprovalNotesU = @ApprovalNotesU, ApprovalStatus = @ApprovalStatus, ApprovalDate = @ApprovalDate
WHERE   VoucherID = @VoucherID AND ApprovalLevel = @ApprovalLevel AND ApprovalFlowID = @ApprovalFlowID
EXEC W84P3020 @FormID, @UserID, @VoucherID, @ApprovalLevel, @ApprovalFlowID, @sp_ApprovalStatus, @Mode`,
      params: `[ { key: 'ApprovalNotesU', type: 'NVARCHAR', value: 'Duyệt cấp 1' },
{ key: 'ApprovalStatus', type: 'INT', value: 1 },
{ key: 'ApprovalDate',
  type: 'VARCHAR',
  value: '2020-04-28 16:59:53.842' },
{ key: 'VoucherID',
  type: 'VARCHAR',
  value: '71C502AC-9339-46AD-8897-C1F5A2AD832C' },
{ key: 'ApprovalLevel', type: 'INT', value: 1 },
{ key: 'ApprovalFlowID', type: 'VARCHAR', value: 'APPYCCU' },
{ key: 'FormID', type: 'VARCHAR', value: 'W13F1000' },
{ key: 'UserID', type: 'VARCHAR', value: '00142' },
{ key: 'VoucherID',
  type: 'VARCHAR',
  value: '71C502AC-9339-46AD-8897-C1F5A2AD832C' },
{ key: 'ApprovalLevel', type: 'INT', value: 1 },
{ key: 'ApprovalFlowID', type: 'VARCHAR', value: 'APPYCCU' },
{ key: 'sp_ApprovalStatus', type: 'INT', value: 1 },
{ key: 'Mode', type: 'INT', value: 0 } ]`
    });
    arraySample.push({
      query: `INSERT INTO D09T2020
(
    LeaveTransID,
    EmployeeID,
    DateLeft,
    ResignFormID,
    ReasonID,
    Notes,
    NoticeDate,
    CreateUserID,
    CreateDate,
    LastModifyUserID,
    LastModifyDate
)
VALUES
(
    @LeaveTransID,
    @EmployeeID,
    @DateLeft,
    @ResignFormID,
    @ReasonID,
    @Notes,
    @NoticeDate,
    @CreateUserID,
    @CreateDate,
    @LastModifyUserID,
    @LastModifyDate
)
EXEC W84P3005 @ModuleID, @TransTypeIDP3005, @DivisionID, @UserID, @HostID, @Mode,
              @StatusApproval, @ApprovalLevel, @FormID, @VoucherID, @Language, @TransactionID
DELETE FROM D91T1010 WHERE KeyID = @KeyID And TableName = @TableName AND DivisionID = @DivisionID
INSERT INTO D91T1010
(
  DivisionID, KeyID, TableName, AttachmentID,
  Sequence, URL, FileName, FileSize,
  FileExt, CreateUserID, LastModifyUserID, CreateDate,
  LastModifyDate, IsCDN, Description, DescriptionU, Key2ID
)
VALUES
(
  @DivisionID, @KeyID, @TableName, @AttachmentID0,
  0, @URL0, @FileName0, @FileSize0,
  @FileExt0, @CreateUserID, @CreateUserID, @CreateDate,
  @LastModifyDate, 1, @Description0, @DescriptionU0, @Key2ID
),
(
  @DivisionID, @KeyID, @TableName, @AttachmentID1,
  0, @URL1, @FileName1, @FileSize1,
  @FileExt1, @CreateUserID, @CreateUserID, @CreateDate,
  @LastModifyDate, 1, @Description1, @DescriptionU1, @Key2ID
) `,
      params: `[ { key: 'LeaveTransID',type: 'VARCHAR',value: 'E2C0E947-00E2-44B3-8589-3190E222E104' },
{ key: 'EmployeeID', type: 'VARCHAR', value: '00145' },
{ key: 'DateLeft', type: 'VARCHAR', value: '2020-03-22' },
{ key: 'ResignFormID', type: 'VARCHAR', value: '' },
{ key: 'ReasonID', type: 'VARCHAR', value: '' },
{ key: 'Notes', type: 'NVARCHAR', value: 'tiếng việt' },
{ key: 'NoticeDate',type: 'VARCHAR',value: '2020-04-28 17:05:27.442' },
{ key: 'CreateUserID', type: 'VARCHAR', value: '00142' },
{ key: 'CreateDate',type: 'VARCHAR',value: '2020-04-28 17:05:27.442' },
{ key: 'LastModifyUserID', type: 'VARCHAR', value: '00142' },
{ key: 'LastModifyDate',  type: 'VARCHAR',value: '2020-04-28 17:05:27.442' },
{ key: 'ModuleID', type: 'VARCHAR', value: 'D09' },
{ key: 'TransTypeIDP3005', type: 'VARCHAR', value: 'W09F2010' },
{ key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'UserID', type: 'VARCHAR', value: '00142' },
{ key: 'HostID', type: 'VARCHAR', value: '' },
{ key: 'Mode', type: 'INT', value: 0 },
{ key: 'StatusApproval', type: 'INT', value: 0 },
{ key: 'ApprovalLevel', type: 'INT', value: 1 },
{ key: 'FormID', type: 'VARCHAR', value: 'W09F2010' },
{ key: 'VoucherID',type: 'VARCHAR',value: 'E2C0E947-00E2-44B3-8589-3190E222E104' },
{ key: 'Language', type: 'VARCHAR', value: '84' },
{ key: 'TransactionID', type: 'VARCHAR', value: 'W09F2010' },
{ key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'KeyID',type: 'VARCHAR',value: 'E2C0E947-00E2-44B3-8589-3190E222E104' },
{ key: 'TableName', type: 'VARCHAR', value: 'D09T2060' },
{ key: 'AttachmentID0',
  type: 'VARCHAR',
  value: 'ATT00000000000000000000000000000000000000700003650' },
{ key: 'URL0',
  type: 'VARCHAR',
  value:
   'file/67670250-68e0-4eb2-93b9-3410fd648940.xlsx?path=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7InBhdGgiOiIvMjAxOS8xMS82NTU0M2U1ZC1iYTgyLTRiMmEtYjRlNC0zMGZkMzJmZTZhY2QueGxzeCIsIm9yaWdpbmFsRmlsZU5hbWUiOiI2NzY3MDI1MC02OGUwLTRlYjItOTNiOS0zNDEwZmQ2NDg5NDAueGxzeCIsImZpbGVTaXplIjozNDg0NiwiZmlsZVR5cGUiOiJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCIsInB1cmwiOiJodHRwOi8vYXByaWNvdC5kaWdpbmV0LmNvbS52bjo2MDQwIiwiaXVybCI6Imh0dHA6Ly8xMC4wLjAuOTk6NjA0MCJ9XSwiaWF0IjoxNTcyNTk0NjQ4LCJleHAiOjg3OTcyNTk0NjQ4fQ.__12HK8o3op2Eg60ZaULq59KveSBun2bwgTtRye-M5g' },
{ key: 'FileName0',
  type: 'NVARCHAR',
  value: '670250-68e0-4eb2-93b9-3410fd648940' },
{ key: 'FileSize0', type: 'DECIMAL', value: 12312 },
{ key: 'FileExt0', type: 'VARCHAR', value: 'xlsx' },
{ key: 'CreateUserID', type: 'VARCHAR', value: '00142' },
{ key: 'CreateDate',
  type: 'VARCHAR',
  value: '2020-04-28 17:05:27.442' },
{ key: 'LastModifyDate',
  type: 'VARCHAR',
  value: '2020-04-28 17:05:27.442' },
{ key: 'Description0', type: 'VARCHAR', value: 'english' },
{ key: 'DescriptionU0', type: 'NVARCHAR', value: 'việt nam' },
{ key: 'Key2ID', type: 'VARCHAR', value: '0002' },
{ key: 'DivisionID', type: 'VARCHAR', value: 'QT' },
{ key: 'KeyID',
  type: 'VARCHAR',
  value: 'E2C0E947-00E2-44B3-8589-3190E222E104' },
{ key: 'TableName', type: 'VARCHAR', value: 'D09T2060' },
{ key: 'AttachmentID1',
  type: 'VARCHAR',
  value: 'ATT00000000000000000000000000000000000000700003651' },
{ key: 'URL1',
  type: 'VARCHAR',
  value:
   'file/67670250-68e0-4eb2-93b9-3410fd648940.xlsx?path=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7InBhdGgiOiIvMjAxOS8xMS82NTU0M2U1ZC1iYTgyLTRiMmEtYjRlNC0zMGZkMzJmZTZhY2QueGxzeCIsIm9yaWdpbmFsRmlsZU5hbWUiOiI2NzY3MDI1MC02OGUwLTRlYjItOTNiOS0zNDEwZmQ2NDg5NDAueGxzeCIsImZpbGVTaXplIjozNDg0NiwiZmlsZVR5cGUiOiJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCIsInB1cmwiOiJodHRwOi8vYXByaWNvdC5kaWdpbmV0LmNvbS52bjo2MDQwIiwiaXVybCI6Imh0dHA6Ly8xMC4wLjAuOTk6NjA0MCJ9XSwiaWF0IjoxNTcyNTk0NjQ4LCJleHAiOjg3OTcyNTk0NjQ4fQ.__12HK8o3op2Eg60ZaULq59KveSBun2bwgTtRye-M5g' },
{ key: 'FileName1',
  type: 'NVARCHAR',
  value: '670250-68e0-4eb2-93b9-3410fd648940' },
{ key: 'FileSize1', type: 'DECIMAL', value: 12222 },
{ key: 'FileExt1', type: 'VARCHAR', value: '.xlsx' },
{ key: 'CreateUserID', type: 'VARCHAR', value: '00142' },
{ key: 'CreateDate',
  type: 'VARCHAR',
  value: '2020-04-28 17:05:27.442' },
{ key: 'LastModifyDate',
  type: 'VARCHAR',
  value: '2020-04-28 17:05:27.442' },
{ key: 'Description1', type: 'VARCHAR', value: 'english123' },
{ key: 'DescriptionU1', type: 'NVARCHAR', value: 'việt nam 123' },
{ key: 'Key2ID', type: 'VARCHAR', value: '0002' } ]`
    });

module.exports = {
    data: arraySample
}