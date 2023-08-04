-- \i /Users/ericlee/HackReactor/MVP/database/schema.sql;
\c temp;
DROP DATABASE IF EXISTS gems;
CREATE DATABASE gems;

\c gems;
DROP TABLE IF EXISTS initial;
DROP TABLE IF EXISTS gem_weight;
CREATE TABLE initial (
  id SERIAL PRIMARY KEY,
  name TEXT,
  type TEXT,
  weight INT
);

CREATE TABLE gem_weight (
  id SERIAL PRIMARY KEY,
  name TEXT,
  superior INT DEFAULT 0,
  anomalous INT DEFAULT 0,
  divergent INT DEFAULT 0,
  phantasmal INT DEFAULT 0
);

COPY initial(id, name, type, weight)
FROM '/Users/ericlee/HackReactor/MVP/gems.csv'
DELIMITER ','
CSV HEADER;

INSERT INTO gem_weight (name)
SELECT DISTINCT name FROM initial;

UPDATE gem_weight
SET
  superior = COALESCE(subquery.superior, 0),
  anomalous = COALESCE(subquery.anomalous, 0),
  divergent = COALESCE(subquery.divergent, 0),
  phantasmal = COALESCE(subquery.phantasmal, 0)
FROM (
  SELECT
    name,
    MAX(CASE WHEN type = 'Superior' THEN weight ELSE NULL END) AS superior,
    MAX(CASE WHEN type = 'Anomalous' THEN weight ELSE NULL END) AS anomalous,
    MAX(CASE WHEN type = 'Divergent' THEN weight ELSE NULL END) AS divergent,
    MAX(CASE WHEN type = 'Phantasmal' THEN weight ELSE NULL END) AS phantasmal
  FROM initial
  GROUP BY name
) AS subquery
WHERE gem_weight.name = subquery.name;