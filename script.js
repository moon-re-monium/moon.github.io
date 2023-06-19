        document.addEventListener('DOMContentLoaded', function() {
          loadText();
          countCharacters();
          displayLastUpdated();

          const textInput = document.getElementById('text-input');
          textInput.addEventListener('input', function() {
            countCharacters();
            updateLastUpdated();
          });

          const resetButton = document.getElementById('reset-button');
          resetButton.addEventListener('click', function() {
            resetCount();
          });

          const saveButton = document.getElementById('save-button');
          saveButton.addEventListener('click', function() {
            updateLastUpdated();
            saveTextMemo();
            saveText();
            saveM();
          });

          const copyButton = document.getElementById('copy-button');
          copyButton.addEventListener('click', function() {
            copyToClipboard();
          });

          const textInputMemo = document.getElementById('kokomemo');
          textInputMemo.addEventListener('input', function() {
            saveTextMemo();
            saveText();
          });
        });

        function saveM() {
          console.log('saveOK');
        }

        function countCharacters() {
          const text = document.getElementById('text-input').value;
          const countWithSpaces = text.length;
          const countWithoutSpaces = text.replace(/\s/g, '').length;

          document.getElementById('count-with-spaces').textContent = countWithSpaces;
          document.getElementById('count-without-spaces').textContent = countWithoutSpaces;

          saveText();
          saveTextMemo();
        }

        function resetCount() {
          document.getElementById('text-input').value = '';
          document.getElementById('kokomemo').value = '';
          document.getElementById('limit-input').value = '';
          localStorage.clear();
          countCharacters();
        }

        function copyToClipboard() {
          const text = document.getElementById('text-input').value;
          navigator.clipboard.writeText(text)
            .then(() => {
              alert('テキストがクリップボードにコピーされました');
            })
            .catch(() => {
              alert('テキストのクリップボードへのコピーに失敗しました');
            });
        }

        function saveText() {
          const text = document.getElementById('text-input').value;
          localStorage.setItem('savedText', text);
        }

        function saveTextMemo() {
          const textMemo = document.getElementById('kokomemo').value;
          localStorage.setItem('savedTextMemo', textMemo);
        }

        function loadText() {
          const savedText = localStorage.getItem('savedText');
          if (savedText) {
            document.getElementById('text-input').value = savedText;
          }

          const savedTextMemo = localStorage.getItem('savedTextMemo');
          if (savedTextMemo) {
            document.getElementById('kokomemo').value = savedTextMemo;
          }
        }


        function displayLastUpdated() {
          const timestamp = localStorage.getItem('lastUpdated');
          if (timestamp) {
            const date = new Date(parseInt(timestamp));
            const formattedDate = date.toLocaleString('ja-JP');
            document.getElementById('last-updated').textContent = `最終変更日時: ${formattedDate}`;
          }
        }

        function updateLastUpdated() {
          const timestamp = Date.now();
          localStorage.setItem('lastUpdated', timestamp.toString());
          displayLastUpdated();
        }
