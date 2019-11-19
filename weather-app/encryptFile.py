#encryptfile.py
# requires pip install pyAesCrypt

import pyAesCrypt
bufferSize = 64 * 1024

#you would pass in the password at the commandline
password = "foo123"
pyAesCrypt.encryptFile("APIkeys.txt", "APIkeys.txt.aes", password, bufferSize)
