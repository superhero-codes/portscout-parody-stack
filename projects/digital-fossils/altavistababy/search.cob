       IDENTIFICATION DIVISION.
       PROGRAM-ID. ALTAVISTA-BABY.
       AUTHOR. PORTSCOUT-PARODY-STACK.
      *
      * AltaVistaBaby — A search engine from a simpler time.
      * This COBOL program simulates a search backend.
      * It doesn't actually search anything.
      * But neither did AltaVista, really.
      *
       ENVIRONMENT DIVISION.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-QUERY          PIC X(80) VALUE SPACES.
       01 WS-RESULT-COUNT   PIC 9(8) VALUE 0.
       01 WS-RESULT-MSG     PIC X(80) VALUE SPACES.
       01 WS-COUNTER        PIC 9(4) VALUE 0.

       PROCEDURE DIVISION.
       MAIN-PARAGRAPH.
           DISPLAY "========================================".
           DISPLAY " ALTAVISTA BABY SEARCH ENGINE v1.0".
           DISPLAY " (COBOL Edition)".
           DISPLAY "========================================".
           DISPLAY " ".
           DISPLAY "Enter search query: " WITH NO ADVANCING.
           ACCEPT WS-QUERY.
           
           COMPUTE WS-RESULT-COUNT = 
               FUNCTION RANDOM * 1000000.
           
           DISPLAY " ".
           DISPLAY "Searching the World Wide Web...".
           DISPLAY "Query: " WS-QUERY.
           DISPLAY "Results found: " WS-RESULT-COUNT.
           DISPLAY " ".
           DISPLAY "Top Results:".
           DISPLAY "----------------------------------------".
           
           PERFORM DISPLAY-RESULT 5 TIMES.
           
           DISPLAY "----------------------------------------".
           DISPLAY " ".
           DISPLAY "AltaVistaBaby - We searched before it".
           DISPLAY "was cool. (It was never cool.)".
           DISPLAY " ".
           STOP RUN.

       DISPLAY-RESULT.
           ADD 1 TO WS-COUNTER.
           DISPLAY WS-COUNTER ". " WS-QUERY 
               " - Result page " WS-COUNTER
               " (definitely relevant)".
