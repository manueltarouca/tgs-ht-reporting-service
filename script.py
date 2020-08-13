#automate image download
import urllib.request

file_name = "images_url.txt"

with open(file_name, "r") as a_file:
	for line in a_file:
		stripped_line = line.strip()
		try:
			# /images/ folder must exist
			urllib.request.urlretrieve(stripped_line, "images/" + stripped_line.split('/')[-1])
			print("image [" + stripped_line.split('/')[-1] + "] downloaded with success")
		except:
			print("failed to download from [" + stripped_line + "]")