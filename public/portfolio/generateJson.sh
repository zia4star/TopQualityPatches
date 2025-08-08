#!/bin/bash

# Output JSON file
OUTPUT_FILE="gallery.json"

# Start of the JSON object
echo "{" > "$OUTPUT_FILE"

# Array of folders
FOLDERS=("patchesGallery" "digiGallery" "vectorGallery")

for i in "${!FOLDERS[@]}"; do
  FOLDER="${FOLDERS[$i]}"
  echo "  \"$FOLDER\": [" >> "$OUTPUT_FILE"

  # Loop through files in the folder
  FILES=("$FOLDER"/*)
  for j in "${!FILES[@]}"; do
    FILE_NAME=$(basename "${FILES[$j]}")
    COMMA=","
    # Avoid comma on last item
    if [[ $j -eq $((${#FILES[@]} - 1)) ]]; then
      COMMA=""
    fi
    echo "    { \"img\": \"$FOLDER/$FILE_NAME\", \"location\": \"\" }$COMMA" >> "$OUTPUT_FILE"
  done

  # Close the current array, add comma unless it's the last folder
  if [[ $i -lt $((${#FOLDERS[@]} - 1)) ]]; then
    echo "  ]," >> "$OUTPUT_FILE"
  else
    echo "  ]" >> "$OUTPUT_FILE"
  fi
done

# End of JSON object
echo "}" >> "$OUTPUT_FILE"

echo "✅ Combined JSON written to $OUTPUT_FILE"
