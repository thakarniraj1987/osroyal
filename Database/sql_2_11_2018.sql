DROP PROCEDURE IF EXISTS `sp_GetScorePosition`;
DELIMITER $$
CREATE  PROCEDURE `sp_GetScorePosition`(IN `pUserID` INT, IN `pFancyID` INT, IN `pTypeID` INT)
  BEGIN
    DECLARE lUseType INTEGER;
    SET lUseType = (SELECT usetype FROM createmaster WHERE mstrid = pUserID);
    IF lUseType = 3 THEN

      SELECT  CONVERT(SUM(aa) * -1, DECIMAL(10,2)) ResultValue ,Yes SessInptYes FROM(
                                                                                    SELECT CASE WHEN OddValue = 1 THEN 'No' ELSE 'Yes' END Odds ,
                                                                                           CASE WHEN OddValue = 1 THEN
                                                                                               CASE WHEN OddsNumber <=  Yes THEN - (b.bet_value * (b.session_no_size/100))
                                                                                                    ELSE ABS(b.bet_value) END
                                                                                                ELSE
                                                                                               CASE WHEN OddsNumber > Yes THEN - (b.bet_value)
                                                                                                    ELSE ABS(b.bet_value * (b.session_yes_size/100)) END
                                                                                               END * 1 aa ,
                                                                                           Yes ,Bet_ID ,Bet_Value ,OddValue ,OddsNumber FROM sessionlist a
                                                                                                                                               LEFT JOIN (SELECT i.* FROM bet_entry i INNER JOIN createmaster j ON j.mstrid = i.userid) b ON a.ID = b.FancyID
                                                                                    WHERE TypeID =2 AND b.FancyID = pFancyID
                                                                                    )aa GROUP BY Yes ORDER BY Yes DESC ;

    ELSEIF lUseType = 2 THEN

      SELECT CONVERT(SUM(aa) * -1, DECIMAL(10,2)) ResultValue,Yes SessInptYes
      FROM(
          SELECT CASE WHEN OddValue = 1 THEN 'No' ELSE 'Yes' END Odds, CASE WHEN OddValue = 1 THEN CASE WHEN OddsNumber <= Yes THEN - ((b.bet_value * (b.session_no_size/100)) * (b.Dealer/100)) ELSE ABS(b.bet_value * (b.Dealer/100)) END ELSE CASE WHEN OddsNumber > Yes THEN - (b.bet_value * (b.Dealer/100)) ELSE ABS((b.bet_value * (b.session_yes_size/100)) * (b.Dealer/100)) END END * 1 aa,
                 Yes,Bet_ID,Bet_Value,OddValue,OddsNumber
          FROM sessionlist a
                 LEFT JOIN (
                           SELECT i.*
                           FROM bet_entry i
                                  INNER JOIN createmaster j ON j.mstrid = i.userid
                           WHERE j.parentId = pUserID) b ON a.ID = b.FancyID
          WHERE TypeID =2 AND b.FancyID = pFancyID
          )aa
      GROUP BY Yes
      ORDER BY Yes DESC ;

    ELSEIF lUseType = 1 THEN

      SELECT CONVERT(SUM(aa) * -1, DECIMAL(10,2)) ResultValue,Yes SessInptYes
      FROM(
          SELECT CASE WHEN OddValue = 1 THEN 'No' ELSE 'Yes' END Odds, CASE WHEN OddValue = 1 THEN CASE WHEN OddsNumber <= Yes THEN - ((b.bet_value * (b.session_no_size/100)) * (b.Master/100)) ELSE ABS(b.bet_value * (b.Master/100)) END ELSE CASE WHEN OddsNumber > Yes THEN - (b.bet_value * (b.Master/100)) ELSE ABS((b.bet_value * (b.session_yes_size/100)) * (b.Master/100)) END END * 1 aa,
                 Yes,Bet_ID,Bet_Value,OddValue,OddsNumber
          FROM sessionlist a
                 LEFT JOIN (
                           SELECT i.*
                           FROM bet_entry i
                                  INNER JOIN createmaster j ON j.mstrid = i.userid
                                  INNER JOIN createmaster k ON k.mstrid = j.parentid
                           WHERE k.parentid = pUserID) b ON a.ID = b.FancyID
          WHERE TypeID =2 AND b.FancyID = pFancyID
          )aa
      GROUP BY Yes
      ORDER BY Yes DESC;

    ELSEIF lUseType = 0 THEN
      SELECT  CONVERT(SUM(aa) * -1, DECIMAL(10,2)) ResultValue ,Yes SessInptYes   FROM(
                                                                                      SELECT CASE WHEN OddValue = 1 THEN 'No' ELSE 'Yes' END Odds ,
                                                                                             CASE WHEN OddValue = 1 THEN
                                                                                                 CASE WHEN OddsNumber <=  Yes THEN - Bet_value
                                                                                                      ELSE Bet_value END
                                                                                                  ELSE
                                                                                                 CASE WHEN OddsNumber > Yes THEN - Bet_value
                                                                                                      ELSE Bet_value END
                                                                                                 END * 1 aa ,
                                                                                             Yes ,Bet_ID ,Bet_Value ,OddValue ,OddsNumber FROM sessionlist a
                                                                                                                                                 LEFT JOIN bet_entry b ON a.ID = b.FancyID
                                                                                      WHERE TypeID =2 AND b.FancyID = pFancyID

                                                                                      )aa GROUP BY   Yes ORDER BY Yes DESC ;
    END IF;
  END$$
DELIMITER ;