#!/bin/bash
OUTPUT_DIR="docs/letters/berkshire"
TEMP_DIR="/tmp/berkshire-letters"
mkdir -p "$TEMP_DIR"
mkdir -p "$OUTPUT_DIR"

HTML_YEARS="1977 1978 1979 1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002"
PDF_YEARS="2003 2004 2005 2006"

echo "Downloading HTML letters..."
for year in $HTML_YEARS; do
  url="https://raw.githubusercontent.com/uknj/BerkshireLetters/master/${year}.html"
  curl -sL "$url" -o "$TEMP_DIR/${year}.html"
  size=$(wc -c < "$TEMP_DIR/${year}.html" 2>/dev/null || echo 0)
  echo "$year: $size bytes"
  sleep 0.2
done

echo "Downloading PDF letters..."
for year in $PDF_YEARS; do
  url="https://raw.githubusercontent.com/uknj/BerkshireLetters/master/${year}ltr.pdf"
  curl -sL "$url" -o "$TEMP_DIR/${year}.pdf"
  size=$(wc -c < "$TEMP_DIR/${year}.pdf" 2>/dev/null || echo 0)
  echo "$year PDF: $size bytes"
  sleep 0.2
done
