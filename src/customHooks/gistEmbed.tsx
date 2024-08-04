import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';

interface GistEmbedProps {
  gistId: string;
}

interface GistFile {
  filename: string;
  content: string;
  language: string;
}

const GistEmbed: React.FC<GistEmbedProps> = ({ gistId }) => {
  const [gistFiles, setGistFiles] = useState<GistFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/gists/${gistId}`)
      .then(response => response.json())
      .then(data => {
        const files = Object.values(data.files).map((file: any) => ({
          filename: file.filename,
          content: file.content,
          language: file.language ? file.language.toLowerCase() : 'javascript',
        }));
        setGistFiles(files);
      })
      .catch(error => console.error('Error fetching Gist:', error))
      .finally(() => setLoading(false));
  }, [gistId]);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
      .then(() => alert('Code copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <div>
      {loading ? (<>
        <p>loading..</p>
      </>) : (<>
        {gistFiles.map(file => (
          <div key={file.filename}>
            <div className='flex justify-between items-center'>
              <p className="text-gray-500 whitespace-normal dark:text-gray-400">{file.filename}</p>
              <button type="button" onClick={() => copyToClipboard(file.content)} className="text-gray-900 flex justify-center  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                <div className='flex justify-center items-center gap-2'>
                  <p>Copy {file.filename} Code Snippet</p>
                  <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif" alt="🙂" width="22" height="22" />
                  </picture>
                </div>
              </button>
            </div>
            <CodeMirror
              value={file.content}
              height="auto"
              theme={dracula}
              extensions={[]}
              readOnly
            />
            <br />
            <hr />
            <br />
          </div>
        ))}
      </>)}

    </div>
  );
};

export default GistEmbed;