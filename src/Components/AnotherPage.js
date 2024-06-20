import React, { useState, useEffect } from 'react';

const AnotherPage = () => {
  const initialLinksState = [
    { url: 'https://meet.google.com/dbw-citd-jns', used: false, disabled: false },
    { url: 'https://meet.google.com/vdj-ujxw-pfa', used: false, disabled: false },
    { url: 'https://meet.google.com/rhi-rffv-dyz', used: false, disabled: false },
    { url: 'https://meet.google.com/evi-gpgk-gse', used: false, disabled: false },
    { url: 'https://meet.google.com/xfz-quft-zub', used: false, disabled: false },
  ];

  const [links, setLinks] = useState(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links'));
    return storedLinks || initialLinksState;
  });

  const [activeLinkIndex, setActiveLinkIndex] = useState(() => {
    const storedIndex = localStorage.getItem('activeLinkIndex');
    return storedIndex ? parseInt(storedIndex) : 0;
  });

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  useEffect(() => {
    localStorage.setItem('activeLinkIndex', activeLinkIndex);
  }, [activeLinkIndex]);

  const handleClick = (index) => {
    if (!links[index].used && !links[index].disabled) {
      // Redirect to the clicked link
      window.location.href = links[index].url;

      // Mark the link as used and disable the button
      const updatedLinks = [...links];
      updatedLinks[index].used = true;
      updatedLinks[index].disabled = true;
      setLinks(updatedLinks);

      // Set the next link as active
      const nextIndex = index + 1 < links.length ? index + 1 : 0;
      setActiveLinkIndex(nextIndex);
    } else if (links[index].disabled) {
      alert('This link is disabled. Please try again later!');
    } else {
      alert('This link has already been used!');
    }
  };

  return (
    <div>
      <h1>Links</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index} style={{ backgroundColor: index === activeLinkIndex ? 'lightgreen' : (link.used ? 'lightgray' : 'white') }}>
            <button disabled={link.disabled} onClick={() => handleClick(index)}>Link {index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnotherPage;
