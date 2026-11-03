import requests

def cari_live_tiktok():
    # Contoh endpoint API simulasi pencarian live stream aktif
    url = "https://api.tiktok.com/live/feed/recommend" 
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
    
    try:
        response = requests.get(url, headers=headers)
        data = response.json()
        
        # Menyaring room yang memiliki kotak hadiah (Goody Bag)
        live_list = data.get("data", {}).get("rooms", [])
        for live in live_list:
            room_id = live.get("room_id")
            title = live.get("title", "")
            viewer_count = live.get("viewer_count", 0)
            
            # Jika judul atau deskripsi mengandung indikasi box/koin
            if "box" in title.lower() or "koin" in title.lower() or "goody" in title.lower():
                print(f"[DITEMUKAN] Room ID: {room_id} | Penonton: {viewer_count} | Judul: {title}")
                
    except Exception as e:
        print("Gagal mengambil data live:", e)

if __name__ == "__main__":
    cari_live_tiktok()
